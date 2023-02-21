import { execa } from 'execa';
import logger from './util/logger.js';
import { tokboard } from './util/tokboard.js';

const keywords = await execa('./venv/Scripts/python.exe', ['./python/keywords.py'], { encoding: 'latin1' })

logger((JSON.parse(keywords.stdout)).join(', '), 'keywords');

logger((await tokboard())[0].playCount, 'info')