$(function(){
	$.ajax({
		type: 'post',
		url: '/user/getUserList',
		data: 'page=' + $('#page').val(),
		dataType: 'json',
		success: function(data){
			$.each(data.content, function(index, items){ 
				//console.log(data); 		  
				console.log(JSON.stringify(data)); 		  
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
			
			//페이징 처리
			var pagingHTML = '';
			for(var i=0;i<data.totalPages; i++ ){
				if(i == $('#page').val()) {
					//pagingHTML += `<span id='currentPaging' onclick='userPaging(` + i + `)'>` + (i+1) + `</span>`;
					pagingHTML += `<span id='currentPaging' onclick='userPaging(${i})'>${(i+1)}</span>`;
				} else {
					//pagingHTML += `<span id='paging' onclick='userPaging(` + i + `)'>` + (i+1) + `</span>`;
					pagingHTML += `<span id='paging' onclick='userPaging(${i})'>${(i+1)}</span>`;
				}
				
			}//for
			
			$('#userPagingDiv').html(pagingHTML);
			
			// 아이디를 클릭했을 때
			$('.subjectA').click(function(){
				location.href='/user/updateForm?id=' + $(this).text() + '&pg=' + $('#pg').val(); // 해당 주소로 넘겨받은 파라미터 값 출력
			});
		},
		error: function(e){
			console.log(e);
		}
	});
});