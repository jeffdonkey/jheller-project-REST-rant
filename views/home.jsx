//importing React and Def (from default.jsx)
const React = require ('react')
const Def = require ('./default')

//another stub function
function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>                
            </main>
        </Def>
    )
}

module.exports = home