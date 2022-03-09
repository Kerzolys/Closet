const dragAndDrop = () => {
    const card = document.querySelector('.js-card');
    const cells = document.querySelectorAll('.js-cell');

    const dragStart = function() {
        setTimeout(() => {
                this.classList.add('hide');
            }, 0)
            // console.log('dragstart');
    }
    const dragEnd = function() {
        this.classList.remove('hide');
    }

    const dragOver = function(evt) {
        // console.log('over');
        evt.preventDefault()
    }

    const dragEnter = function(evt) {
        this.classList.add('hovered')
        evt.preventDefault()


    }
    const dragLeave = function() {
        this.classList.remove('hovered')

    }
    const dragDrop = function() {
        this.append(card);
        this.classList.remove('hovered')
    }




    cells.forEach(cell => {
        cell.addEventListener('dragover', dragOver);
        cell.addEventListener('dragenter', dragEnter);
        cell.addEventListener('dragleave', dragLeave);
        cell.addEventListener('drop', dragDrop);

    });



    card.addEventListener('dragstart', dragStart);
    card.addEventListener('dragend', dragEnd);

}
dragAndDrop()





window.addEventListener('load', console.log('ok'))