const React = require('react')
const Def = require('../default')

// look in your notes in this project
// there is some starter code for part 6.3

function show(data) {
    return (
        <Def>
            <main>
                <div className="row">
                    <div className="col-sm-6">
                        <img src={data.place.pic} alt={data.place.name} />
                        <h3>
                            Located in {data.place.city}, {data.place.state}
                        </h3>
                    </div>
                    <div className="col-sm-6">
                        <h1>{data.place.name}</h1>
                        <h2>
                            Rating
                        </h2>
                        No rating yet
                        <br />
                        <h2>
                            Description
                        </h2>
                        <h5>
                            {data.place.showEstablished()}
                        </h5>
                        <h4>
                            Serving {data.place.cuisines}
                        </h4>
                        <br />
                        <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
                            Edit
                        </a>{` `}
                        <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
                            <button type="submit" className="btn btn-danger">
                                Delete
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = show