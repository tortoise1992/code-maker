import React, { Component } from 'react'
import { Card, Col,Row } from 'antd'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { LIST,CONTAINER } from './Types'
export default class A extends Component {
    state={
        list:[
            {
                name:'栅格',
                value:'layout'
            },
            {
                name:'输入框',
                value:'input'
            },
            {
                name:'日期',
                value:'date'
            }
        ],
        data:[

        ]
    }
    onDragStart = (obj) => {
        
    };
    onDragUpdate = (obj) => {
        // console.log(obj,'update')
    }
    onDragEnd = (obj) => {
        // 判断是从外部拖入新增还是内部排序
        if(obj.destination){
            if(obj.source.droppableId === LIST){
                if(obj.destination.droppableId !== LIST){
                    // 新增组件
                    let origin=this.state.list[obj.source.index]
                    this.setState({
                        data:[...this.state.data,origin]
                    },()=>{
                        console.log(this.state)
                    })
                }
            }else{
                if(obj.destination.droppableId !== LIST){
                    // 更新排序
                }
            }
            
        }
    }
    render() {
        return (
            <DragDropContext
                onDragStart={this.onDragStart}
                onDragUpdate={this.onDragUpdate}
                onDragEnd={this.onDragEnd}
            >
                <Card title='拖拽'>
                    <Row gutter={15}>
                        <Col span={6}>
                            <Droppable droppableId={LIST} type="demo">
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        // style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
                                        {...provided.droppableProps}
                                    >
                                        {
                                            this.state.list.map((item,index)=>{
                                                return(
                                                    <Draggable draggableId={`list-${index}`} key={index} index={index}>
                                                        {(provided, snapshot) => (
                                                            <div
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                            >
                                                                <h4>{item.name}</h4>
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                )
                                            })
                                        }
                                        
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </Col>
                        <Col span={18}>
                            <Droppable droppableId={CONTAINER} type="demo">
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey',height:400 }}
                                        {...provided.droppableProps}
                                    >
                                        {
                                            this.state.data.map((item,index)=>{
                                                return(
                                                    <Draggable draggableId={`box-${index}`} key={index} index={index}>
                                                        {(provided, snapshot) => (
                                                            <div
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                            >
                                                                <h4>{item.name}</h4>
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                )
                                            })
                                        }
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </Col>
                    </Row>



                </Card>
            </DragDropContext>

        )
    }
}
