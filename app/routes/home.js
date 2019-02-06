import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return[{
      id:'101',
      name:'Priya',
      designation:'Software Developer',
      dept:'Developer',
      floor:'4',
      salary:'55000',
      experience:'5'
    },{
    id:'102',
    name:'Bharati',
    designation:'Software Developer',
    dept:'Developer',
    floor:'4',
    salary:'40000',
    experience:'3'
  },{
    id:'103',
    name:'Pavi',
    designation:'Software Tester',
    dept:'Testing',
    floor:'5',
    salary:'35000',
    experience:'2'
  },{
    id:'104',
    name:'Nivedhini',
    designation:'Software Tester',
    dept:'Testing',
    floor:'5',
    salary:'40000',
    experience:'4'
  }]
  }
});
