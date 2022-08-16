import { API_URL } from '@env'

export type updateRiskLabelPayload = { id: string, label: string }

export function updateRiskLabel(payload: updateRiskLabelPayload, options: Omit<RequestInit, 'body' | 'method'> = {}): Promise<Response> {
  const fetchOptions: RequestInit = {
    ...options,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  };
  return fetch(API_URL, fetchOptions);
}

export function getRiskDetailList(options: Omit<RequestInit, 'body' | 'method'> = {}): Promise<Response> {
  const fetchOptions = {
    ...options,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return fetch(API_URL, fetchOptions);
}