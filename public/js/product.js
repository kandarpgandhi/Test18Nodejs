const onSubmitHandler = (e) => {
    e.preventDefault()
    console.log('Submit function called')
    const product = e.target.productName.value

    const obj = {
        "productName": product
    }

    axios.post('http://localhost:3000/api/product', obj).then((result) => {
        console.log(result.data)
    })
}