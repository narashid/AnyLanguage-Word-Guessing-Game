import { CONFIG } from './config'

export const VALIDGUESSES = [
'waka', 
'fala', 
'tawa',
'bele',
'uman', 
'sawa', 
'were', 
'shot', 
'bete',
'wach', 
'slip',
'taya',
'krep' 
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
