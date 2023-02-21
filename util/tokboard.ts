import tljs from '@y21/tljs'
import axios from 'axios'

export async function tokboard() {
    return JSON.parse((await tljs.parse(await axios.get('https://tokboard.com/').then(res => res.data))).getElementById('__NEXT_DATA__')!.innerText()).props.pageProps.songs as TokBoardSongs[]
}

interface TokBoardSongs {
    playCount: number
    id: string
}