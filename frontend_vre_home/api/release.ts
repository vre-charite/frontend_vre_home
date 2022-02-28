import { resourceAxios } from './config';

export function getReleaseNotes() {
  return resourceAxios({
    method: 'get',
    url: '/locales/en/releaseVersion.json',
    data: {},
  });
}
