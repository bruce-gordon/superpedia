export const getData = (name) => {
  console.log('dog')
  const proxyUrl = 'https://pure-hollows-05817.herokuapp.com/'
  return fetch(`${proxyUrl}https://comicvine.gamespot.com/api/characters/?api_key=b75f5fe05e82c4de9fe0cb4d38ed1e69083b81af&filter=name:${name}&field_list=aliases,deck,first_appeared_in_issue,image,name,publisher,real_name,site_detail_url&limit=10&format=json`)
  .then(resp => resp.json())
}
