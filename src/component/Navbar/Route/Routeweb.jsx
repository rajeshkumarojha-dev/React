import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Linkweb from '../Link/Linkweb';
import Home from '../../Home/Home';
import SearchBar from '../../searchBar/SearchBar';
import Forms from '../../Forms/Forms';
import Mapping from '../../Array/Mapping';
import HideShow from '../../Hide&Show/HideShow';
import PrintVal from '../../PrintInputVal/PrintVal';
import StateName from '../../Hooks/state/StateName';
import UseeffectHooks from '../../Hooks/UseEffect/UseeffectHooks';
import UseRefHook from '../../Hooks/Useref/UseRefHook';
import UseMemoHooks from '../../Hooks/UseMemo/UseMemoHook';
import Component from '../../subcomponent/Component';
import Data from '../../DynamicRoute/Data';

const Routeweb = () => {
    return (
        <>
            <Linkweb />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/searchbar' element={<SearchBar />}></Route>
                <Route path='/forms' element={<Forms/>} />
                <Route path='/array' element={<Mapping/>} />
                <Route path='/Hideshow' element={<HideShow/>} />
                <Route path='/printval' element={<PrintVal/>} />
                <Route path='/usestate' element={<StateName/>} />
                <Route path='/useeffect' element={<UseeffectHooks/>} />
                <Route path='/usememo' element={<UseMemoHooks/>} />
                <Route path='/useref' element={<UseRefHook/>} />
                <Route path='/subcomponent' element={<Component/>} />
                <Route path='/data/:id/:name' element={<Data/>} />
            </Routes>

        </>
    )
}

export default Routeweb
