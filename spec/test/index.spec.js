describe('index', () => {
    it('dummy', () => {
        expect(true).toEqual(true)
    })
})

describe('random_bg_color', () => {

    it('result should start with rgb', () => {
        var result = random_bg_color()
        expect(result).toMatch(/^rgb/)
    })

    
})
