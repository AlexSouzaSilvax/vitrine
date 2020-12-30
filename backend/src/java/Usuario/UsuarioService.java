/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Usuario;

import java.util.List;

/**
 *
 * @author alex
 */
public class UsuarioService {

    Usuario usuario = new Usuario();
    UsuarioDAO usuarioDAO = new UsuarioDAO();
    List<Usuario> lista;

    public List<Usuario> lista() {
        return usuarioDAO.lista();
    }

    public Usuario salvar(Usuario usuario) {

        if (usuario.getId() == null) {
            return usuarioDAO.inserir(usuario);
        } else {
            return usuarioDAO.alterar(usuario);
        }
    }

    public void deletar(long pId) {
        usuarioDAO.deletar(pId);
    }

    public boolean verificaDplDoc(String pDoc) {

        lista = lista();
        boolean result = false;

        if (!lista.isEmpty()) {
            for (int i = 0; i < lista.size(); i++) {
                if (lista.get(i).getDocumento().equals(pDoc)) {
                    result = true;
                }
            }
        }

        return result; //true = duplicado, false nao
    }
}
