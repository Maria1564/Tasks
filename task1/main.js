


const auth = async(email, password)=> {
    const res = await fetch("https://reqres.in/api/user", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        email,
        password
    })
})

const data = await res.json()
return {email: data.email, password: data.password}
}
// auth("grogy@gmail.com", "retro2020")

module.exports =  auth


