$('#searchListBtn').click(function(){
	if($('#value').val() == ''){		
		alert('검색어를 입력하세요.');
	}else{
		$.ajax({
			type: 'post',
			url: '/user/getUserSearchList',
			data:  {'columnName' : $('#columnName').val(),
					'value' : $('#value').val()}, //columnName, value
			dataType: 'json',
			success: function(data){	
				console.log(JSON.stringify(data));
				$('#userListTable tr:gt(0)').remove(); // tr에 인덱스 1234 ... 가 매겨진다. gt는 greater than. 0보다 큰 애들선택
				
				$.each(data, function(index, items){ //for each문에서는 data.list가 아니라 data가 돌아가야 한다. 
					console.log(items.name); 		  
					$('<tr/>').append($('<td/>', { 	  
						align: 'center',
						text : items.name
					})).append($('<td/>',{
					}).append($('<a/>', { 
						href:'#', 
						text : items.id,
						class: 'subjectA'
						}))
					).append($('<td/>', {
						align: 'center',
						text : items.pwd
					})).appendTo($('#userListTable'));
				}); // $.each
			
			},
			error : function(e){
				console.log(e);
			}
		});// $.ajax
	}
});