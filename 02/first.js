const {app,BrowserWindow}=require('electron')
function createWindow(){
    //创建浏览器窗口
    win = new BrowserWindow({width:800,height:600})
    //载入应用主页
    win.loadFile('index.html')
    //关闭当前窗口后触发closed事件
    win.on('closed',()=>{
        console.log('closed');
        win = null;
    })
}
//Electron初始化完成后触发ready事件
app.on('ready',createWindow)
//所有窗口关闭后触发window-all-closed事件
app.on('window-all-closed',()=>{
    console.log('window-all-closed');
    //非Mac OS X 平台系统直接调用app.quit()方法
    if(process.platform != 'darwin'){
        app.quit();
    }
})
//窗口激活后触发activate事件
app.on('activate',()=>{
    console.log('activate');
    if(win === null){
        createWindow();
    }
})