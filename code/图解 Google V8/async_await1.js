
async function getResult () {
  try {
    let id_url = 'id_url'
    let id_res = await fetch(id_url)
    let id_text = await id_res.text()
    console.log('id_text:',id_text)

    let name_url = 'name_url'
    let new_name_url = name_url + "?id=" + id_text
    console.log('new_name_url:',new_name_url)


    let name_res = await fetch(new_name_url)
    let name_text = await name_res.text()
    console.log('name_text:',name_text)
  } catch (err) {
    console.error(err)
  }
}
getResult()

function fetch (url) {
  console.log('url:',url)
  return {
    text () {
      console.log('fetch...retrun:')
      return 'fetch---text()---return'
    }
  }
}

// url: id_url
// fetch...retrun:
// id_text: fetch---text()---return
// new_name_url: name_url?id=fetch---text()---return
// url: name_url?id=fetch---text()---return
// fetch...retrun:
// name_text: fetch---text()---return