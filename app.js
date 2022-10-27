document.getElementById('btn-search').addEventListener('click',showGithubUser)

function showGithubUser(){
    let user= document.getElementById('usergithub').value

    let url= 'https://api.github.com/users/'+user
    fetch(url).then(res=>res.json()).then(data=>{
        if(data.message){
            alert('No existe el usuario '+user)

        }else{
            console.log(data)
            document.getElementById('imagen').innerHTML=`
                <img width="100" src="${data.avatar_url}"></img>
            `
            document.getElementById('name').innerHTML=`
            <div>${data.name}</div>
            `

            const dias=data.created_at
            const fecha=dias.slice(0, -10)

            const fechaFormato = new Date(fecha)
            const opciones = {  month: 'short',year: 'numeric', day: 'numeric' }
            const fechaCreada=fechaFormato.toLocaleDateString('es-PE', opciones)

            document.getElementById('created-at').innerHTML=`
                <div class="joined">Joined ${fechaCreada}</div>
            `
            document.getElementById('login').innerHTML=`
            <div>@${data.login}</div>
            `
            document.getElementById('bio').innerHTML=`
            <div>@${data.bio}</div>
            `
            document.getElementById('public_repos').innerHTML=`
            <div>${data.public_repos}</div>
            `
            document.getElementById('followers').innerHTML=`
            <div>${data.followers}</div>
            `
            document.getElementById('following').innerHTML=`
            <div>${data.following}</div>
            `
            document.getElementById('location').innerHTML=`
            <div><img width="15" src="./image/pin.png" alt="" />&nbsp;${data.location}</div>
            `
            document.getElementById('blog').innerHTML=`
            <div><img width="15" src="./image/link.png" alt="" />&nbsp;${data.blog}</div>
            `
            document.getElementById('twitter_username').innerHTML=`
            <div><img width="15" src="./image/twitter.png" alt="" />&nbsp;${data.twitter_username}</div>
            `
            document.getElementById('company').innerHTML=`
            <div><img width="15" src="./image/hotel.png" alt="" />&nbsp;${data.company}</div>
            `
        }
        
    }).catch(e=>{
        console.log("error "+e)
    })
}