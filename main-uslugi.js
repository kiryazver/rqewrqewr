 // Обработка формы
        const serviceForm = document.getElementById('serviceForm');
        
        serviceForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                service: document.getElementById('service').value,
                message: document.getElementById('message').value
            };
            
            // Здесь можно добавить отправку данных на сервер
            console.log('Форма отправлена:', formData);
            
            alert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');
            serviceForm.reset();
        });