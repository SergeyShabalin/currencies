import react, {useState, useEffect} from "react";
import axios from "axios";

import '../MainCourses/Detail.css'

const Detail = ({setDetail, val}) => {

    const [latestDetail, setLatestDetail] = useState({})

    useEffect(() => {
        getLatestValute()
    }, []);

    const getLatestValute = () => {
        axios.get('https://www.cbr-xml-daily.ru/latest.js').then((resp) => {
            setLatestDetail(resp.data)
        }).catch((error) => {
            console.warn(error, 'server error');
        })
    }


    return (
        <div className='Detail'>
            <h1>Статистика за последние 10 дней валюты "{val.Name}"</h1>

            <table className="table tableCourse detail">
                <thead className='thead-dark theadDetail'>
                <tr>
                    <th>Код валюты</th>
                    <th>Курс относительно рубля</th>
                </tr>
                </thead>
                <tbody>

                <tr>
                    <td>{val.CharCode}</td>
                    <td>{latestDetail.rates && latestDetail.rates[val.CharCode]} </td>
                </tr>
                </tbody>
            </table>

            <button type="button"
                    className="btn btn-primary"
                    onClick={() => {
                        setDetail(false)
                    }}
                    style={{marginLeft: 100}}
            >Назад
            </button>
        </div>

    )
}

export default Detail