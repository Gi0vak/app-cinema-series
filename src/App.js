import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Single from './pages/Single';
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/:id"
                    element={
                        <Single
                        //datas={datas}
                        //isLoading={isLoading}
                        //error={error}
                        />
                    }
                />
            </Routes>
        </div>

        // <>
        //   <div className="App">
        //     <button onClick={handleClick}>click moi</button>
        //     {datas.slice(0, 5)
        //       .map((data, index) => (
        //         < Card key={index} data={data} error={error} loading={isLoading} />
        //       ))}
        //   </div>
        //   <Form />
        // </>
    );
}

export default App;
