import React, { useState, useEffect } from 'react';
import { Modal, Select, BackTop } from 'antd';
import { UpCircleTwoTone } from '@ant-design/icons';
import semver from 'semver';
import _ from 'lodash';
import { getReleaseNotes } from '../../../api/release';
import parse from 'html-react-parser';

const { Option } = Select;
const getSuffix = (version: string, currentVersion: string) => {
  if (version === 'all') {
    return '';
  } else if (semver.eq(version, currentVersion)) {
    return ' (current)';
  } else {
    return ' (past)';
  }
};

export function ReleaseNoteModal(props: {
  visible: boolean;
  version: string;
  setVisible: any;
  versionsArr: any[];
}) {
  const [versionsArr, setVersionArr] = useState<any[]>();
  const [version, setVersion] = useState<any>(null);
  useEffect(() => {
    async function init() {
      try {
        const res = await getReleaseNotes();
        const versions = (res as any).data?.versions;
        const currentVersion =
          versions && versions[0] ? versions[0].version : null;
        setVersionArr(versions);
        setVersion(currentVersion);
      } catch (err) {
        setVersionArr([]);
        setVersion('0.0.0');
      }
    }
    init();
  }, []);

  if (versionsArr && versionsArr?.length && version) {
    return (
      <Modal
        style={{ transform: 'translateZ(0)' }}
        maskClosable={false}
        footer={[
          <>
            <Select
              onChange={(value) => {
                setVersion(value);
              }}
              defaultValue={version}
              style={{ width: 160, textAlign: 'left' }}
            >
              {versionsArr.map &&
                versionsArr.map((item) => {
                  return (
                    <Option value={item.version} key={item.version}>
                      <b>{`${item.version}(${item.date})`}</b>
                    </Option>
                  );
                })}
              <Option value="all">
                <b>All</b>
              </Option>
            </Select>
          </>,
        ]}
        title={
          <>
            <img alt="release note" width={25} src="/vre/Rocket.svg"></img>{' '}
            <b>
              {`Release Note ${version === 'all' ? ' (all)' : version}` +
                getSuffix(version, version)}
            </b>
          </>
        }
        visible={props.visible}
        onCancel={() => {
          props.setVisible(false);
        }}
      >
        <div
          id={'releaseNoteDiv'}
          style={{ maxHeight: '50vh', overflow: 'auto' }}
        >
          {version === 'all'
            ? parse(
                versionsArr
                  .map((item) => `<h2>Release ${item.version}</h2>` + item.note)
                  .join('<hr/>'),
              )
            : parse(
                _.find(versionsArr, (item) => {
                  return item.version === version;
                })?.note || '',
              )}
        </div>
        <BackTop
          style={{
            position: 'fixed',
            left: '80%',
            bottom: '100px',
            transform: 'translateX(-50%)',
            cursor: 'default',
          }}
          visibilityHeight={200}
          target={() => {
            return document.getElementById('releaseNoteDiv') as HTMLElement;
          }}
        >
          <UpCircleTwoTone style={{ cursor: 'pointer' }} />
        </BackTop>
      </Modal>
    );
  } else {
    return null;
  }
}
