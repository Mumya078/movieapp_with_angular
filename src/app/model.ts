export class Model{
  user;
  items;

  constructor() {
    this.user = "Emir"
    this.items=[
      new TodoItems("Kahvaltı",false),
      new TodoItems("Spor",true),
      new TodoItems("Fatura",false)
    ]
  }

}
export class TodoItems{
  description;
  action;
  constructor(description:string,action:boolean) {
    this.description=description;
    this.action=action;
  }
}
