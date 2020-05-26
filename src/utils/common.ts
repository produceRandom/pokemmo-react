/**
 * 常用方法封装
 */
const common = {
    add(x: number, y: number) {
        return x + y;
    },
    test() {
        return this.add(1, 4);
    }
}



export default common
