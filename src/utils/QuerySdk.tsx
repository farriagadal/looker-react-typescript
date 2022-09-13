import { useEffect } from 'react'
import { getCoreSDK2 } from '@looker/extension-sdk-react'
import { Looker40SDK } from '@looker/sdk'
import React from 'react'

const CoreSDKFunctions = () => {
  const sdk = getCoreSDK2<Looker40SDK>()

  useEffect(() => {
    inlineQueryClick()
  }, [])

  const inlineQueryClick = async () => {
    try {
      const value = await sdk.ok(
        sdk.run_inline_query({
          result_format: 'json',
          body: {
            total: true,
            model: 'dm_commercial',
            view: 'sales_tkt_prueba',
            fields: ['sales_tkt_prueba.airpt_trip'],
            // sorts: [`last_name desc`],
          },
        })
      )
      console.log(JSON.stringify(value, null, 2))
    } catch (error) {
      console.log('Error invoking inline query', error)
    }
  }

  return (<></>)
}

export default CoreSDKFunctions