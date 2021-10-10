export const get = async url => {
  try {
    const resp = await fetch(url, { method: 'GET' })
    const jsonResp = await resp.json()
    return jsonResp || {}
  } catch (err) {
    console.log(err)
  }
  return {}
}

export const put = async (url, params) => {
  try {
    const resp = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(params)
    })
    const jsonResp = await resp.json()
    return jsonResp || {}
  } catch (err) {
    console.log(err)
  }
  return {}
}
