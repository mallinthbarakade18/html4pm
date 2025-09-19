
                    function outer(){
                        let a=5;
                        function inner(){
                            console.log(a);
                        }
                        return inner;
                    }
                    console.log(outer());
                    
                    