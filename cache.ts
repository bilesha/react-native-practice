import * as SecureStore from 'expo-secure-store'
import { Platform } from 'react-native'
import type { TokenCache } from '@clerk/clerk-expo'

const createTokenCache = (): TokenCache => {
  return {
    getToken: async (key: string): Promise<string | null> => {
      try {
        const item = await SecureStore.getItemAsync(key)
        if (item) {
          console.log(`${key} was used 🔑\n`)
        } else {
          console.log('No values stored under that key.')
        }
        return item
      } catch (error) {
        console.error('secure store get item error', error)
        await SecureStore.deleteItemAsync(key)
        return null
      }
    },
    saveToken: (key: string, token: string) => {
      return SecureStore.setItemAsync(key, token)
    },
  }
}

export const tokenCache = Platform.OS !== 'android' ? createTokenCache() : undefined