delimiter $$

create trigger after_insert_lines
after insert on hopi_hari_db.lines
for each row
begin

	declare wait_time int;
    declare line_count int;
    declare total_wait int;
    
    select tempo_espera into wait_time
	from rides
    where id = new.atracoes_id;
    
    select count(users_id) into line_count
    from hopi_hari_db.lines
    where atracoes_id = new.atracoes_id;
    
    set total_wait = wait_time * line_count;
    
    insert into notifications (description, users_id, atracoes_id, status)
values (concat(total_wait_time, 'minutos de espera para o brinquedo'), 8, 5, true);
end $$
delimiter ;