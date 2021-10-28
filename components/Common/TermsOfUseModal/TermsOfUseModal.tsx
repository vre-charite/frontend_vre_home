import { Modal, Typography } from 'antd';
import styles from './TermsOfUseModal.module.scss';
const { Title } = Typography;

export const TermsOfUseModal = (props: {
  visible: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  handleScroll?: () => void;
  footer?: React.ReactNode;
}) => {
  return (
    <Modal
      title="Platform Terms of Use Agreement"
      visible={props.visible}
      onOk={props.handleOk}
      onCancel={props.handleCancel}
      width={'70%'}
      // bodyStyle={{ maxHeight: '68vh', overflow: 'scroll' }}
      footer={props.footer}
      maskClosable={false}
      className={styles.terms_modal}
    >
      <div
        style={{ overflowY: 'scroll', height: '60vh' }}
        onScroll={props.handleScroll}
      >
        <h1 style={{ textAlign: 'center' }}>VRE General Terms of Use</h1>
        <h5 style={{ textAlign: 'center' }}>Version 1.0 (2021 July 19) </h5>

        <h2 style={{ color: '#3b5991', marginTop: 20 }}>Table of Contents</h2>
        <ol>
          <li>
            <a href="#first">Scope</a>
          </li>
          <li>
            <a href="#second">Glossary</a>
          </li>
          <li>
            <a href="#third">Accessing the VRE</a>
            <ol>
              <li>
                <a href="#third-one">VRE User Account</a>
              </li>
              <li>
                <a href="#third-two">Personal information we collect</a>
              </li>
              <li>
                <a href="#third-three">VRE responsibilities</a>
              </li>
            </ol>
          </li>
          <li>
            <a href="#four">Transferring Research Data to the VRE</a>
          </li>
          <li>
            <a href="#five">Accessing Data and Services on the VRE</a>
            <ol>
              <li>
                <a href="#five-one">Limitations of Use</a>
              </li>
              <li>
                <a href="#five-two">Licensing</a>
              </li>
              <li>
                <a href="#five-three">Citation</a>
              </li>
            </ol>
          </li>
          <li>
            <a href="#six">Intellectual Property</a>
          </li>
          <li>
            <a href="#seven">
              Other policies and conditions that may apply to you
            </a>
          </li>
          <li>
            <a href="#eight">Termination and Liability</a>
          </li>
          <li>
            <a href="#nine">Disputes and Disagreements</a>
          </li>
          <li>
            <a href="#ten">Contact Us</a>
          </li>
          <li>
            <a href="#eleven">Imprint</a>
          </li>
        </ol>
        <Title level={4}>Version History</Title>
        <table className="version-table">
          <tr>
            <th>Version </th>
            <th>Description </th>
            <th>Approval </th>
            <th>Date (yyyy-mm-dd) </th>
          </tr>
          <tr>
            <td>1.0 </td>
            <td>Initial General Terms of Use </td>
            <td></td>
            <td></td>
          </tr>
        </table>
        <p>
          These General Terms of Use define the relationship between the
          Universitätsmedizin Charité Berlin (Charité) and you as you access and
          use the Virtual Research Environment (VRE). The use of the VRE implies
          that you accept these terms and conditions. Additional terms of use
          may apply to the use of specific VRE services.{' '}
        </p>
        <Title level={4} id="first">
          1 Scope
        </Title>
        <p>
          These terms govern any use of the VRE, including access to content,
          services, tools and products available in or through the VRE.
        </p>

        <Title level={4} id="second">
          2 Glossary
        </Title>
        <p>
          <ul>
            <li>
              <b>Controller</b>
              <span> or </span>
              <b>Data Controller </b>
              <span>
                means a natural or legal person, public authority, agency or
                other body which, alone or jointly with others, determines the
                purposes and means of the processing of personal data (GDPR Art.
                4(7))
              </span>
            </li>
            <li>
              <b>GDPR</b> means the General Data Protection Regulation{' '}
            </li>
            <li>
              <b>Processor</b> or <b>Data Processor</b> means a natural or legal
              person, public authority, agency or other body which processes
              personal data on behalf of the controller (GDPR Art. 4(8)){' '}
            </li>

            <li>
              <b>Pseudonymization</b> means the processing of User’s personal
              data in such a manner that the personal data can no longer be
              attributed to a specific data subject without the use of
              additional information, provided that such additional information
              is kept separately and is subject to technical and organisational
              measures to ensure that the personal data are not attributed to an
              identified or identifiable natural person (GDPR Art. 4(5)){' '}
            </li>

            <li>
              <b>Technical and Organizational Measures</b> means those measures
              aimed at protecting personal data against accidental or unlawful
              destruction or accidental loss, alteration, unauthorised
              disclosure or access, in particular where the processing involves
              the transmission of data over a network, and against all other
              unlawful forms of processing.{' '}
            </li>

            <li>
              <b>User Account Information</b> means Personal information about
              the User for the purpose of providing a User Account on the VRE.{' '}
            </li>

            <li>
              {' '}
              <b>User</b> means a user of the VRE.{' '}
            </li>

            <li>
              <b>User’s Data</b> means data processed by the User via the
              Services{' '}
            </li>

            <li>
              <b>User’s Personal Data</b> means the personal data contained
              within the User’s data.{' '}
            </li>

            <li>
              <b>Virtual Research Environment (VRE)</b> means the dedicated
              storage and computing platform provided by the Charité within its
              IT infrastructure to store and process personal data for research
              purposes{' '}
            </li>

            <li>
              <b>VRE Administrator</b> means an employee of the Charité or its
              contracted partners tasked with oversight, operations, and/or
              maintenance of the VRE.{' '}
            </li>

            <li>
              <b>VRE Core</b> means the data storage zone in which Users can
              store and process data that has been separated from the uploaded
              User’s Personal data stored in the Green Room.{' '}
            </li>

            <li>
              <b>VRE Green Room</b> means the data storage zone in which Users
              can upload and process User’s data to pseudonymize and/or limit
              exposure of potentially sensitive information to those not
              authorized to view that information. 
            </li>
          </ul>
        </p>

        <Title level={4} id="third">
          3 Data Controllers for the VRE website
        </Title>
        <p>
          For additional information about how the VRE is accessed and used,
          please refer to the VRE Access Policy available at
          https://vre.charite.de.
        </p>
        <h5 id="third-one">3.1 VRE User Account</h5>
        <p>
          Access to the VRE requires a VRE user account consisting of a username
          and password. You certify that the details of your identity provided
          to the Charité in association with applying for a VRE user account are
          accurate.{' '}
        </p>

        <p>
          You agree to keep details of your user account, including password,
          secret. Account credentials are not to be shared with anyone. You must
          inform Charité VRE support immediately if you suspect any unauthorized
          use of or access to your password or account (
          <a href="mailto:vre-support@charite.de">vre-support@charite.de</a>).{' '}
        </p>

        <p>
          Charité and its service providers will not be responsible if you or
          others suffer any harm or loss because you do not keep your account
          secure.{' '}
        </p>
        <h5 id="third-two">3.2 Personal information we collect </h5>
        <p>
          When you access or use the VRE, we may collect and process your
          personal User Account information. The type of information collected
          depends on the services you are accessing or using. The purposes for
          processing categories of personal data collected and the legal basis
          for processing can be found in the VRE Privacy Policy available at
          https://vre.charite.de.{' '}
        </p>
        <h5 id="third-three">3.3 VRE responsibilities </h5>
        <p>
          Charité and its service providers will take appropriate measures to
          ensure that the processing of your User Account information is done in
          a safe and secure manner and in accordance with applicable data
          protection law. All requests associated with your rights as a data
          subject related to user account information collected and processed in
          the VRE can be made to the Charité Data Protection Officer by emailing{' '}
          <a href="mailto:datenschutz@charite.de">datenschutz@charite.de</a>.
        </p>
        <Title level={4} id="four">
          4 Transferring Research Data to the VRE
        </Title>
        <p>
          The VRE allows you to transfer a copy of your research data for the
          purpose of storing and processing these data in the VRE. The data you
          transfer to the VRE will be associated with a VRE project. Other VRE
          users who have been authorized to access this project by a Project
          Administrator of the project will be able to access all or a subset of
          the data you transfer to the VRE, and all or a subset of data derived
          from the data you transfer to the VRE (e.g., the results of any
          processing conducted on the data you transfer to the VRE).
        </p>
        <p>In transferring data to the VRE, you accept the following terms: </p>
        <ol type="A">
          <li>
            You agree to use the VRE only for the purpose of conducting
            scientific research or browsing publicly available content for
            personal interest and not for any other purpose including, without
            limitation any commercial purpose, without prior written consent of
            the Charité.{' '}
          </li>

          <li>
            You have the legal authority to transfer and make available data in
            the VRE for dissemination and use within the VRE.{' '}
          </li>

          <li>
            The data that you transfer to the VRE were collected in compliance
            with GDPR as well as with ethical, scientific and/or industrial best
            practices and institutional guidelines.{' '}
          </li>

          <li>
            With respect to data on human subjects or participants, the data you
            upload to the VRE is limited to data that is necessary for and
            relevant to the specific purpose of data processing.{' '}
          </li>

          <li>
            You will follow and adhere to the{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://vre.charite.de/xwiki/wiki/vrepublic/view/Main/Privacy%20and%20Data%20Governance/Data%20Processing%20Agreement/"
            >
              Data Processing Agreement
            </a>{' '}
            with the Charité for the research project(s) of which you are a
            member.{' '}
          </li>

          <li>
            With respect to data on human subjects or participants, you will
            make best efforts to pseudonymize or anonymize such data before you
            transfer them to the VRE.{' '}
          </li>

          <li>
            If you are required and authorized to transfer identifiable data to
            the VRE, your will make best efforts to pseudonymize or anonymize
            the data within the VRE prior to further processing of these data in
            the VRE.{' '}
          </li>

          <li>
            You will make best efforts to ensure that data you transfer to the
            VRE does not contain viruses, worms, spyware, malware or any other
            similar malicious programs.{' '}
          </li>

          <li>
            You will not submit any information or materials into the VRE that
            infringe or are capable of infringing third party rights, are
            libellous, obscene, threatening or otherwise unlawful.{' '}
          </li>

          <li>
            You are solely and entirely responsible and liable for the data you
            transfer to the VRE. You are responsible for the confidentiality of
            any data processed, downloaded, or copied from the VRE.{' '}
          </li>
        </ol>
        <p>
          The VRE Access Review Committee may at its discretion review your
          compliance to these terms at any time. Non-compliant data may be
          removed from the VRE.
        </p>
        <Title level={4} id="five">
          5 Accessing Data and Services on the VRE
        </Title>
        <h5 id="five-one">5.1 Limitations of Use </h5>
        <p>
          In using the VRE, you may access the data you have transferred to the
          VRE, or data shared with you by other VRE users. You may also access
          VRE features, such as data processing tools, data visualization
          interfaces, and high performance computing resources.{' '}
        </p>
        <p>
          In accessing such VRE data and features, you agree to the following
          terms.{' '}
        </p>
        <ol type="A">
          <li>
            When accessing pseudonymized, anonymized or aggregated data on human
            subjects, you will not attempt to establish the identity of, or
            attempt to contact any of the data subjects, or perform any unlawful
            linkage of these data with any other information.{' '}
          </li>
          <li>
            You will not carry out any calculations, operations or transactions
            that may interrupt, destroy or restrict the functionality of the
            operation of the VRE or of any program, computer or means of
            telecommunications.{' '}
          </li>
          <li>
            You will not use the data for high-risk activities such as the
            operation of nuclear facilities, air traffic control, or life
            support systems, where the use or failure of VRE features could lead
            to death, personal injury, or environmental damage.{' '}
          </li>
          <li>
            You may not attempt to gain unauthorized access to VRE data or
            services, or to the underlying infrastructure, by any illegitimate
            means. You are required to promptly report any known or suspected
            illegitimate use or identified weakness to the VRE support team at{' '}
            <a href="mailto:vre-support@charite.de">vre-support@charite.de</a>.{' '}
          </li>
          <li>
            You commit to comply with any additional rules and regulations
            imposed by your institution and your institutional review board in
            accessing and using data stored in the VRE.{' '}
          </li>
          <li>
            Charité and its service providers make no representations,
            warranties, or guarantees of any kind to the content or accuracy and
            quality of the data accessed in or through the VRE. Accessing and
            using data in the VRE is therefore at your own risk.{' '}
          </li>
          <li>
            Charité and its service providers offer no guarantees regarding
            reliability, functionality, or availability of VRE features. The VRE
            platform and/or its systems may be taken off-line at any time for
            maintenance, upgrades, or other purposes.{' '}
          </li>
        </ol>

        <h5 id="five-two">5.2 Licensing </h5>
        <p>
          Some data and software stored in or provided by the VRE may have
          explicit licensing conditions. You must follow the licensing
          conditions required by such data or software, including all
          restrictions on commercial use, requirements for attribution and
          requirements to share-alike.{' '}
        </p>
        <h5 id="five-three">5.3 Citation </h5>

        <p>
          If you use content or services from VRE to advance a scientific
          publication you must follow the applicable citation requirements
          listed in the data or software licence, or otherwise published by the
          data or software provider.{' '}
        </p>
        <Title level={4} id="six">
          6 Intellectual Property
        </Title>
        <p>
          The content, organisation, graphics, design, compilation, magnetic
          recording, digital conversion and other matters related to the VRE are
          protected under applicable intellectual property rights (including but
          not limited to copyrights and trademarks) and other proprietary
          rights.{' '}
        </p>

        <p>
          Subject to statutory allowances, extracts of material from the VRE may
          be accessed, downloaded and printed for your personal and
          non-commercial use except where specified by the licences attached to
          the VRE resources and services.
        </p>

        <Title level={4} id="seven">
          7 Other policies and conditions that may apply to you
        </Title>
        <p>
          Further VRE policies and conditions may apply to you and can be found
          at https://vre.charite.de/.
        </p>

        <Title level={4} id="eight">
          8 Termination and Liability
        </Title>

        <p>
          The data and features available in the VRE are provided on an &quot;as
          is&quot; and &quot;as available&quot; basis. Please note that VRE
          features and content may contain bugs, viruses, errors, problems or
          other limitations. To the extent permitted by law, Charité and its
          service providers exclude any warranties (whether expressed or
          implied) for the VRE platform and data. This includes, but is not
          limited to, the disclaimer of any implied warranties of
          merchantability and fitness for a particular purpose of the VRE or of
          any data stored in the VRE.{' '}
        </p>

        <p>
          Data stored in the VRE may contain advice, opinions, statements or
          other information by various authors or entities. Reliance upon any
          such advice, opinion, statement, or other information is at your own
          risk.{' '}
        </p>

        <p>
          Charité and its service providers disclaim, to the extent permitted by
          law, all liability and responsibility arising from any use of the VRE
          or of data stored in the VRE. In particular, but not as a limitation
          thereof, Charité and its service providers are not liable for any
          damages (including damages for loss of business, loss of profits,
          litigation, or the like), whether based on breach of contract, breach
          of warranty, tort (including negligence), product liability or
          otherwise, even if advised of the possibility of such damages. The
          acknowledgment of exclusion of liability is an essential condition for
          Charité and its service providers in granting access to the VRE and to
          data stored in the VRE. The VRE and its features and/or data stored in
          the VRE are provided to users with these limitations only.{' '}
        </p>

        <p>
          Charité and its service providers reserve the right to discontinue at
          any time, temporarily or permanently, your ability to access the VRE
          as well as to transfer data to the VRE and/or access data stored in
          the VRE with or without notice, at its sole discretion and for any
          reason whatsoever.{' '}
        </p>

        <p>
          Charité and its service providers also take no responsibility for any
          breach arising from non-compliance with these General Terms of Use by
          you.{' '}
        </p>

        <Title level={4} id="nine">
          9 Disputes and Disagreements
        </Title>
        <p>
          The substantive laws of Germany, excluding any conflict of law rules,
          shall apply to any dispute arising out of the access and use of the
          VRE pursuant to these General Terms of Use. The ordinary courts of
          Germany shall have exclusive jurisdiction, subject to appeal, if any.
        </p>
        <p>
          This does not affect mandatory legal obligations applicable to you in
          your jurisdiction.{' '}
        </p>

        <Title level={4} id="ten">
          10 Contact Us
        </Title>
        <p>
          If you have any queries, comments, or concerns about these General
          Terms of Use, please contact{' '}
          <a href="mailto:vre-support@charite.de">vre-support@charite.de</a>.
        </p>

        <Title level={4} id="eleven">
          11 Imprint
        </Title>
        <p>
          The VRE is made available and operated by: <br />
          Charité - Universitätsmedizin Berlin <br />
          Charitéplatz 1, 10117 Berlin <br />
          Germany
        </p>
      </div>
    </Modal>
  );
};
