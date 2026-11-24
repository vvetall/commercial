/* Shared selection logic, independent of the view. Prices are in millions of rubles. */
(function(root){
  const normalize=v=>String(v||'').toLowerCase().replaceAll('ё','е').replace(/[«»"']/g,'').replace(/\s+/g,' ').trim();
  function selectOffers(project,filters={}) {
    return project.offers.filter(o=>
      (!filters.purposes?.length||filters.purposes.includes(o.purpose))&&
      (!filters.finishes?.length||filters.finishes.includes(o.finish))&&
      (filters.areaMin==null||o.max>=filters.areaMin)&&
      (filters.areaMax==null||o.min<=filters.areaMax)&&
      (o.priceMin==null||((filters.priceMin==null||o.priceMax>=filters.priceMin)&&(filters.priceMax==null||o.priceMin<=filters.priceMax)))
    );
  }
  function findProjects(projects,filters={}) {
    return projects.filter(p=>
      (!filters.query||normalize([p.name,p.developer,p.region,p.district,p.area,p.address,p.metro,...(p.metros||[]).map(m=>m.name)].join(' ')).includes(normalize(filters.query)))&&
      (!filters.regions?.length||filters.regions.includes(p.region))&&
      (!filters.developers?.length||filters.developers.includes(p.developer))&&
      (!filters.classes?.length||filters.classes.includes(p.propertyClass))&&
      (!filters.years?.length||filters.years.includes(p.year))&&
      (!filters.special||p.special)&&selectOffers(p,filters).length>0
    ).map(p=>({...p,selectedOffers:selectOffers(p,filters)}));
  }
  function minPrice(p){const values=(p.selectedOffers||p.offers).map(o=>o.priceMin).filter(v=>v!=null);return values.length?Math.min(...values):null;}
  function sortProjects(projects,sort='default') {
    return [...projects].sort((a,b)=>{
      const x=minPrice(a),y=minPrice(b);
      if(x==null&&y!=null)return 1;
      if(y==null&&x!=null)return -1;
      if(sort==='price-asc'&&x!=null&&y!=null)return x-y;
      if(sort==='price-desc'&&x!=null&&y!=null)return y-x;
      if(sort==='date')return Number(a.year)-Number(b.year);
      if(sort==='commission')return parseFloat(b.commission.replace(',','.'))-parseFloat(a.commission.replace(',','.'));
      return 0;
    });
  }
  root.CommerceEngine={normalize,selectOffers,findProjects,minPrice,sortProjects};
})(typeof window==='undefined'?globalThis:window);
