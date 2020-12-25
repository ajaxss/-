import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import React from "react";

function showToast() {
    Toast.info('This is a toast tips !!!', 1);
}

function showToastNoMask() {
    Toast.info('Toast without mask !!!', 2, null, false);
}

function successToast(m) {
    Toast.success('购买成功,余额为'+ m +'!!!', 2);
}

function failToast(tis) {
    // Toast.fail('Load failed !!!', 1);
    Toast.fail(tis+'  !!!', 2);

}

function offline() {
    Toast.offline('Network connection failed !!!', 1);
}

function loadingToast() {
    Toast.loading('Loading...', 1, () => {
        console.log('Load complete !!!');
    });
}

const customIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="am-icon am-icon-md">
        <path fillRule="evenodd" d="M59.177 29.5s-1.25 0-1.25 2.5c0 14.47-11.786 26.244-26.253 26.244C17.206 58.244 5.417 46.47 5.417 32c0-13.837 11.414-25.29 25.005-26.26v6.252c0 .622-.318 1.635.198 1.985a1.88 1.88 0 0 0 1.75.19l21.37-8.545c.837-.334 1.687-1.133 1.687-2.384C55.425 1.99 53.944 2 53.044 2h-21.37C15.134 2 1.667 15.46 1.667 32c0 16.543 13.467 30 30.007 30 16.538 0 29.918-13.458 29.993-30 .01-2.5-1.24-2.5-1.24-2.5h-1.25" />
    </svg>
);

class ToastExample extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            code:props.code,
            money:props.money,
            tis:props.tis,
            num:props.num
        }
        

    }
    componentWillReceiveProps(nextProps) {
        console.log(this.state)
        console.log(nextProps)
        // 解决父向子传值 父组件state其他数据更改 子组件重新渲染
        if(this.state.num!=nextProps.num||this.state.code!=nextProps.code||this.state.money!=nextProps.money||this.state.tis!=nextProps.tis){
           this.setState({
                        code: nextProps.code,
                        money: nextProps.money,
                        tis: nextProps.tis,
                        num:nextProps.num
                    },()=>{
                         switch (this.state.code) {
                        case 4:
                            successToast(this.state.money)
                            break;
                        case 5:
                            failToast(this.state.tis)
                            break;
                        default:
                            break;
                    }
                    });
               
        }else{
            return false  
        }
        
      }

    componentDidUpdate() {
        
    }

    render() {


        return (
            <WingBlank>
  
            
            </WingBlank>
        );
    }
}



export default ToastExample