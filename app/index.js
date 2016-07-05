export default class es6View {
    constructor(height) {
        this.height = height;
    }
    getHeight() {
        return this.height;
    }
    sayHeight() {
        alert(this.height);
    }
}
