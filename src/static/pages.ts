export const PAGES = {
  INDEX: '/',
  TINY_URL: {
    INDEX: 'tny',
    SHOW: function(id: string){
      return `tny/${id}`
    }
  }
}