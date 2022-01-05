import { ethers } from 'ethers'
import { defineStore, acceptHMRUpdate } from 'pinia'

export const useWeb3Store = defineStore('web3', {

})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useWeb3Store, import.meta.hot))