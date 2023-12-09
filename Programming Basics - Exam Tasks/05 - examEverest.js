function reachPeak(inputs) {
    let days = 1;
    let height = 5364;
    const peak = 8848;
    let inputIndex = 0;

    while (inputIndex < inputs.length && days <= 5 && height < peak) {
        const userInput = inputs[inputIndex++];
        
        if (userInput !== 'END') {
            if (userInput === 'Yes') {
                days++;
            }

            
            const meters = parseInt(inputs[inputIndex++]);

            if (days <= 5) {
               
                    height += meters;
                   
            }           
        } else {
            break;
        }
    }

    if (height >= peak) {
        console.log(`Goal reached for ${days} days!`);
    } else {
        console.log('Failed!');
        console.log(height);
    }
}

// Example usage
reachPeak(['Yes', '1000', 'Yes', '945', 'No', '1200', 'END']);
