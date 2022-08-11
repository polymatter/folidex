import {API_URL} from '@env'

export default {
  riskDetailList: API_URL,
}

const updateRiskLabelParams = {
  url: API_URL,
  fetchOptions: {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }
}

export function updateRiskLabel(payload: { id: string, label: string }): Promise<Response> {
  const options = {
    ...updateRiskLabelParams.fetchOptions,
    body: JSON.stringify(payload)
  };
  return fetch(updateRiskLabelParams.url, options);
}