export const PAGES = {
  INDEX: '/',
  TINY_URL: {
    INDEX: 'tny',
    SHOW: function(id: string){
      return `tny/${id}`
    }
  },
  RENAME_URL: {
    INDEX: 'rnm',
    SHOW: function(id: string){
      return `rnm/${id}`
    }
  },
  QR_CODE_URL: {
    INDEX: 'qr',
  }
}