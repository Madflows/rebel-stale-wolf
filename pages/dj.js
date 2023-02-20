import RequestList from '@/components/RequestList'
import Page from '@/components/shared/Page'
import React, { Fragment } from 'react'

function DjPage() {
  return (
    <Page title='DJ || Stale Wolf'>
      <h2 className='font-bold text-4xl'>Manage Requests</h2>
      <RequestList />
    </Page>
  )
}

export default DjPage
