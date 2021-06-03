import React, {useState, useEffect} from 'react';
import './Pies.css';
import DisplayPie from './Pie/Pie';
import CreatePie from './CreatePie/CreatePie'
const Pies = props => {
    console.log(props);
    const [pies, setPies] = useState([]);
    const [createPie, setCreatePie] = useState(false)
 
    const fetchPies = () => {
        let url = 'http://localhost:4000/pies/all';

        fetch(url, {
            method: 'GET',
            headers: new Headers({
                'Content-type': 'application/json',
                'Authorization': props.sessionToken
            })
        })
        .then(res => res.json())
        .then(json => setPies(json))
        .then(json => console.log(pies))
    }

    useEffect(() => {
        fetchPies();
    }, [createPie])

    //useEffect runs a function as soon as the component loads

    const buttonHandler = () => setCreatePie(true);

    const pie = [
        {
            nameOfPie: 'pumpkin',
            baseOfPie: 'pumpkin puree',
            crust: 'pastry',
            timeToBake: 50,
            servings: 8,
            rating: 4
        },
        {
            nameOfPie: 'Apple',
            baseOfPie: 'candied apples',
            crust: 'pastry',
            timeToBake: 50,
            servings: 8,
            rating: 4
        },
        {
            nameOfPie: 'chocolate',
            baseOfPie: 'pudding',
            crust: 'graham',
            timeToBake: 50,
            servings: 8,
            rating: 4
        },
    ]
    return(
        <div>
            {createPie ? <CreatePie setCreatePie={setCreatePie} sessionToken={props.sessionToken} /> : null}
           {!createPie ? <button onClick={buttonHandler}>Create Pie!</button> :null}



            <table>
                <thead>
                    <tr>
                        <th>Name of Pie</th>
                        <th>Base of Pie</th>
                        <th>Crust</th>
                        <th>Bake Time</th>
                        <th>Servings</th>
                        <th>Ratings</th>
                    </tr>
                </thead>
                <tbody>
                    <DisplayPie pie={pies}/>
                </tbody>
            </table>
        </div>
    )
}
export default Pies;