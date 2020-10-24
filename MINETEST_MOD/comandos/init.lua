-- Registro de comando de chat
minetest.register_chatcommand("relnode", {
	
	-- Parámetros del comando
	params = "",
	
	-- Descripción del comando
	description = "",
	
	-- Privilegios necesarios para ejecutar el comando
	privs = {},
	
	-- Función del comando
	func = function(name, param)
		
		-- Se obtiene la posición del jugador
		local player = minetest.get_player_by_name("singleplayer")
		local pos = player:getpos()
		xx = pos.x
		yy = pos.y
		zz = pos.z
		
		minetest.set_node({x=xx+1, y=yy, z=zz}, {name="default:wood", param1=0, param2=0})
		return true, "Done!"
	end,
})

minetest.register_chatcommand("getpos", {
	func = function(name)
		local player = minetest.get_player_by_name("singleplayer")
		local pos = player:getpos()
		return true, string.format("x: %f, y: %f, z: %f", pos.x, pos.y, pos.z)
	end,
})



-- COMANDOS PERSONALIZADOS

