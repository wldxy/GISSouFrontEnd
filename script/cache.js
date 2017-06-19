$(document).ready(function(){

$('#poi').search({
    // type          : 'category',
    minCharacters : 1,
    apiSettings   : {
    onResponse: function(response) {
    // var result = {
    //     results : {}
    // };
    // translate GitHub API response to work with search
    // $.each(githubResponse.items, function(index, item) {
    //   var
    //     language   = item.language || 'Unknown',
    //     maxResults = 8
    //   ;
    //   if(index >= maxResults) {
    //     return false;
    //   }
    //   // create new language category
    //   if(response.results[language] === undefined) {
    //     response.results[language] = {
    //       name    : language,
    //       results : []
    //     };
    //   }
    //   // add result to category
    //   response.results[language].results.push({
    //     title       : item.name,
    //     description : item.description,
    //     url         : item.html_url
    //   });
    // });
    console.log(response);
    var result = [];

    for (let e in response) {
        console.log(response[e]);
        result.push({
            title: response[e],
            description: response[e]
        });
    }				
    // for (var i = 0;i < response.length;i++) {
    // 	console.log(response[i]);
    // 	result.push({
    // 		title: response[i],
    // 		description: response[i]
    // 	});
    // }
    console.log(result);

    return result;
    },
    url: 'http://localhost:30056/api/query/cache?code={query}',
        // method: "post",
}
});

$('#event').search({
// type          : 'category',
    minCharacters : 1,
    apiSettings   : {
    onResponse: function(response) {
    // var result = {
    //     results : {}
    // };
    // translate GitHub API response to work with search
    // $.each(githubResponse.items, function(index, item) {
    //   var
    //     language   = item.language || 'Unknown',
    //     maxResults = 8
    //   ;
    //   if(index >= maxResults) {
    //     return false;
    //   }
    //   // create new language category
    //   if(response.results[language] === undefined) {
    //     response.results[language] = {
    //       name    : language,
    //       results : []
    //     };
    //   }
    //   // add result to category
    //   response.results[language].results.push({
    //     title       : item.name,
    //     description : item.description,
    //     url         : item.html_url
    //   });
    // });
            console.log(response);
            var result = [];

            for (let e in response) {
                console.log(response[e]);
                result.push({
                    title: response[e],
                    description: response[e]
                });
            }				
            // for (var i = 0;i < response.length;i++) {
            // 	console.log(response[i]);
            // 	result.push({
            // 		title: response[i],
            // 		description: response[i]
            // 	});
            // }
            console.log(result);

    return result;
    },
    url: 'http://localhost:30056/api/query/cache?code={query}',
        // method: "post",
    }
});

});