export default {
    riskDetailList: 'https://411uchidwl.execute-api.eu-west-2.amazonaws.com/dev/risks',
}

const updateRiskLabelParams = {
    url: 'https://411uchidwl.execute-api.eu-west-2.amazonaws.com/dev/risks',
    fetchOptions: {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }
}

export function updateRiskLabel(payload: { id: string, label: string }): void {
    const options = {
      ...updateRiskLabelParams.fetchOptions,
      body: JSON.stringify(payload)
    };
    fetch(updateRiskLabelParams.url, options)
      .then(console.log)
      .catch(console.error);
}