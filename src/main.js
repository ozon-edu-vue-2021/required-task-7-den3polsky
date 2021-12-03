import json from '../data.json'
import ListView from './ListVeiw'
import resetStyle from './styles/reset.css'
import style from './styles/style.css'


const hash = window.location.hash
const [_,id] = hash.split('-')

const List = new ListView(json, Number(id))

List.render()
