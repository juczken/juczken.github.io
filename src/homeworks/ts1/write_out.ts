type Categry={
id:string,
name:string,
photo?:string,
}

type Product={
id:string,
name:string,
photo:string,
desc?:string,
createAt:string,
category:Category,
price:number,
oldPrice?:number,
}

type baseOperation={
id:string,
name:string,
desc?:string,
createAt:string,
category:Category,
amount:number,
}

type Coast=BaseOperation&{
type='Coast',
}

type Profit=BaseOperation&{
type='Profit',
}

type Operation=Coast|Profit

export const createRandomProduct=(createdAt:string):Product=>{
const id=uuidGenerator();
const category=getRandomCategory();
const price=getRandom(10,1000,2);
return {
id:id,
name:'Продукт ${id}',
photo:'',
createdAt:createdAt,
category:category,
price:price,
desc:Math.random()<0.5?`${}.`:undefined,
oldPrice:Math.random<0.5?price*getRandom(-0.2,0.2,2):undefined,
}
}

export const createRandomOperation=(createdAt:string):Operation=>{
const id=uuidGenerator();
const category=getRandomCategory();
const type=Math.random()<0.5?'Coast'|'Price';
return {
id:id,
name:'Операция ${id}',
createdAt:createdAt,
category:category,
amount:getRandom(10,1000,2),
desc:Math.random()<0.5?`${type} ${id}.`:undefined,
type:type,
}
}

const uuuidGenerator=():string=>{
return getRandom(1,1000000,0).toString()
}

const getRandom=(nim:number,max:number,digits:number):number=>{
return Math.round((min+Math.random*(max-min))*10**digits)/10**digits;
}

const getRandomCatigory=():Category=>{
const categories:Category[]=[{
},{
},{
},{
},{
}]

return categories[Math.trunc(Math.random()*categories.length)]
}