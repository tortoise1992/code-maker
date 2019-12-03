import React, { Component } from 'react'
import { Card, Button } from 'antd'
import SelectComp from './components/SelectComp'
import Table from './components/Table'
export default class Code extends Component {
	state={
		selectVisible:false
	}
	render() {
		return (
			<Card title='代码片段管理' extra={<Button type='primary'>新增</Button>}>
				<SelectComp/>
				<Table/>
      		</Card>
		)
	}
}
