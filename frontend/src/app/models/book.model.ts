class Book {
  _id:string;
  title:string;
  typeB:string;
  created_date:Date;
  description:string;
  address:string;
  status:string;
  phoneNumber:number;
  link:string;



  

  constructor() {
    this.title = '';
    this.typeB = '';
    this.description='';
    this.address='';
    this.status='';
    this.phoneNumber=0;
    this.link=''
    
    
  }
}

export default Book;
