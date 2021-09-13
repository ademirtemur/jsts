
MAPJC is simple usage helper to coercing json to object.

###

     npm i mapjc

###

###

     NOTE: "experimentalDecorators": true in tsconfig.json

###

###

     import MAPJC from 'mapjc';
     
     or

     import { Model, Prop, PropArr, sinCoerce, multiCoerce }  from 'mapjc';

###

###

     enum ACCESS_TYPE {
          FULL = 'FULL',
          LIMITED = 'LIMITED'
     }

     @Model
     class Role {
          @Prop(Number)
          id: number = -1;

          @Prop(String)
          name: string = "";

          @Prop(ACCESS_TYPE)
          type: ACCESS_TYPE = ACCESS_TYPE.LIMITED;

          // your other codes
     }

     @Model
     class User {
          @Prop(Number)
          id!: number;

          @Prop(String)
          name!: string;

          @Prop(Boolean)
          isActive!: boolean;

          @Prop(String, { optional: true })
          act?: string;

          @PropArr(Role, { optional: true, from: 'userRoles' })
          roles!: Role[] = [];

          // your other codes
     }

     @Model
     class GuestUser extends User {
          @Prop(Date)
          joinTime!: Date;

          @Prop(Date)
          expiryTime!: Date;

          @Prop(Role)
          role!: Role;

          // your other codes

          // exaample
          toString() {
               const line = `
                    ${this.id}\n
                    ${this.name}\n
                    ${this.isActive}\n
                    ${this.act}\n
                    ${this.expiryTime}\n
                    ${this.role}\n
               `;

               console.log(line);
          }

          public isAcessExiperd(): boolean {
               const now = Date.now();
               const isExpired = Boolean(now > this.expiryTime.getTime());
               return isExpired;
          }
     }

###

###

     const allRoles = [
          { id: 1, name: "Admin", type: "FULL" },
          { id: 3, name: 'Guest', type: "LIMITED" },
     ]

     const nomUser = {
          id: 0,
          name: 'User',
          isActive: true,
          userRoles: [],
     }

     const gueUser = {
          id: 1,
          name: 'Guest',
          isActive: true,
          joinTime: "2021-04-21T19:02:51.521Z",
          expiryTime: "2021-04-23T19:02:51.521Z",
          role: {
               id: 3,
               name: 'Guest',
               type: "LIMITED"
          }
     }

     const roles: Role[] = MAPJC.multiCoerce(Role, allRoles);
     const user: User = MAPJC.sinCoerce(User, nomUser);
     const guestUser: GuestUser = MAPJC.sinCoerce(GuestUser, gueUser);

###

###

     @Model
     class NodeGrp {
          @Prop(Number)
          level!: number;

          @Prop(String)
          name!: string;

          // self referencing
          @Prop(() => NodeGrp, { optional: true })
          node?: NodeGrp;

          // your other codes
     }

     const nodeGrp = {
          level: 1,
          name: 'Item - 1',
          node: {
               level: 2,
               name: 'Item - 1.1',
               node: {
                    level: 3,
                    name: 'Item - 1.1.1',
               }
          }
     }

     const grpNode: NodeGrp = MAPJC.sinCoerce(NodeGrp, nodeGrp);

###

###

     @Model
     class Menu {
          @Prop(Number)
          id!: number;

          @Prop(String)
          label!: string;

          // self referencing
          @PropArr(() => Menu, { optional: true })
          chidren: Menu[] = [];

          // your other codes
     }

     const _menu = [
          {
               id: 1,
               label: 'Node 1',
               chidren: [
                    {
                         id: 2,
                         label: 'Node 1.1'
                    },
                    {
                         id: 3,
                         label: 'Node 1.2'
                    }
               ]
          },
          {
               id: 4,
               label: 'Node 2'
          }
     ]

     const menu: Menu = MAPJC.multiCoerce(Menu, _menu);

###

**CHANGE LOG**
Repository change
