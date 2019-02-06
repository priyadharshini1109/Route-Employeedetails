export default function() {
  this.namespace='/api';

  this.get('/home',function(){
    return{
      data:[{
        id:'101',
        attributes:{
          name:'Priya',
          designation:'Software Developer',
          dept:'Developer',
          floor:'4',
          salary:'55000',
          experience:'5',
          image:'http://www.uwaging.org/uploads/ProfeshLady(1).png'
        }
      },{
        id:'102',
        attributes:{
        name:'Bharati',
        designation:'Software Developer',
        dept:'Developer',
        floor:'4',
        salary:'40000',
        experience:'3',
        image:'.http://www.uwaging.org/uploads/ProfeshLady(1).png'
      }
    },{
          id:'103',
          attributes:{
          name:'Pavi',
          designation:'Software Tester',
          dept:'Testing',
          floor:'5',
          salary:'35000',
          experience:'2',
          image:'http://www.uwaging.org/uploads/ProfeshLady(1).png'
      }
    },{
        id:'104',
        attributes:{
        name:'Nivedhini',
        designation:'Software Tester',
        dept:'Testing',
        floor:'5',
        salary:'40000',
        experience:'4',
        image:'http://www.uwaging.org/uploads/ProfeshLady(1).png'
      }
    }]
  };
  });
}
