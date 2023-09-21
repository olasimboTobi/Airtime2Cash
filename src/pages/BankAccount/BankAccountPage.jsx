import React, { useState } from 'react'
import ManageAcct from '../../components/manageAccount/ManageAccount'
import ViewBank from '../../components/manageAccount/ViewBank'

function BankAccountPage() {
  const [switchView, setSwitchView] = useState(true)
  return (
    <div>
        {switchView && <ManageAcct toggleSwitch = {setSwitchView} />}
       {!switchView && <ViewBank toggleSwitch = {setSwitchView}/>}
        
    </div>
  )
}

export default BankAccountPage