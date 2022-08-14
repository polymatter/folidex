import { API_URL } from '@env'

export type updateRiskLabelPayload = { id: string, label: string }

export function updateRiskLabel(payload: updateRiskLabelPayload, options: Omit<RequestInit, 'body' | 'method' | 'headers'> = {}): Promise<Response> {
  const updateRiskLabelParams = {
    url: API_URL,
    fetchOptions: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  }

  const fetchOptions: RequestInit = {
    ...options,
    ...updateRiskLabelParams.fetchOptions,
    body: JSON.stringify(payload)
  };
  return fetch(updateRiskLabelParams.url, fetchOptions);
}

export function getRiskDetailList(options: RequestInit = {}): Promise<Response> {
  const getRiskDetailListParams = {
    url: API_URL,
    fetchOptions: {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  }
  const fetchOptions = {
    ...options,
    ...getRiskDetailListParams.fetchOptions
  };
  return fetch(getRiskDetailListParams.url, fetchOptions);
}