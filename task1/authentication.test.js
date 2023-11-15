const auth = require("./main")

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () => Promise.resolve({email:"grogy@gmail.com", password: "retro2020"})
    })
})

it("mail and password sent to the user on the server", async ()=>{
    const result = await auth("grogy@gmail.com", "retro2020")
    expect(result).toEqual({email:"grogy@gmail.com", password: "retro2020"})
})